# Mozu Node SDK Web Toolkit
### Introduction
The Mozu Node SDK Web Toolkit is a prebuilt Express.js web application specifically setup to handle eventing in Mozu. For more information about Mozu's eventing system, you can refer to [this blog post](https://www.mozu.com/blog/best-practices-for-handling-mozu-event-notifications/) and [this Mozu documentation](https://www.mozu.com/docs/developer/applications/event-subscription.htm).

You can also refer to how this project was put together by viewing the posts in this blog series:
  +  [Part One](https://www.mozu.com/blog/use-express-js-and-the-mozu-node-sdk-to-capture-and-work-with-mozu-events-part-one/)
  +  [Part Two](https://www.mozu.com/blog/use-express-js-and-the-mozu-node-sdk-to-capture-and-work-with-mozu-events-part-two/)
  +  [Part Three](https://www.mozu.com/blog/use-express-js-and-the-mozu-node-sdk-to-capture-and-work-with-mozu-events-part-three/)
  +  [Part Four](https://www.mozu.com/blog/use-express.js-and-the-mozu-node-sdk-part-four/)

### Express.js Setup
You'll need Node.js and NPM to utilize this project.

After forking or cloning this repo, navigate to the root of this project's directory and run the following command from a terminal or command line program:  
`npm install`

To start your server, enter the following command:  
`npm start`

Be sure to add a **mozu.config.json** file at the root of the project that resembles the following:

    {
        "appKey": "devAccountNamespace.applicationName.1.0.0.Release",
        "sharedSecret": "sharedsecrethash",
        "baseUrl": "https://home.mozu.com/",
        "tenant": "12345",
        "site": "54321"
    }

You'll populate the fields with data from your Sandbox or Production instance and the Mozu application you create.

By default, this server runs on port 3000. You can alter the default port within **bin > www** or by setting the environment variable PORT.

Your server will have the following routes by default:  
- localhost:3000/  
- localhost:3000/mozu.events

If you wish to change the routing, you'll need to alter **app.js** and **routes > mozu-events.js**. Refer to the **/mozu.events** section below for more information.  
For more information about routing in Express, [see their documentation](http://expressjs.com/en/guide/routing.html).

### Mozu Application Setup
To use this project, [create an application within Mozu](https://www.mozu.com/docs/developer/applications/quickstart.htm).

Once created, navigate to **Packages > Events**. Click **Add Event Subscription**. You can add the events for which you want notifications, and then you'll register your route (yourdomainname.com/mozu.events) to receive the event notification. Click **Save**.

*Note: The URL you supply must be a public URL. Mozu cannot access your localhost. You can use a tool like [ngrok](https://ngrok.com/) to generate a public URL for your localhost for testing purposes.* 

If you plan to use the Mozu Node SDK to manipulate Mozu objects in response to these events, you may need to configure Behaviors as well. Required Behaviors for each REST endpoint are located in the REST API portion of the Mozu Documentation.

Next, click **Install** and select a Sandbox or Production Tenant to install this application. Once installed, open your Sandbox or Production Tenant and navigate to **System > Applications**. Click your application within the list and then click **Enable App**. This turns Mozu's eventing system on for this application so your Express.js server can intercept Mozu event data.

*Note: You'll need to reinstall your Mozu application to your Sandbox or Production Tenant each time you add a new Behavior or Event. Each time you reinstall your Mozu application, you'll also need to enable the application within your Sandbox or Production Tenant.*

### Dispatcher
The `Dispatcher` object is available within **util > event-dispatcher.js**. The `Dispatcher` keeps a list of all Mozu events and matches against the `event.topic` value. A Mozu event is structured with the following data:

    { 
        eventId: '6e3bf479-599d-4b6e-b649-a570000811bd',
        topic: 'application.enabled',
        entityId: '0ac2281ae28e4e39ac1b4f58d204d368',
        timestamp: '2015-12-16T00:29:20.2971532Z',
        correlationId: 'f234a36052bd468e88caf073d538b521',
        isTest: false 
    }

The `Dispatcher` knows about each topic type and references event handlers for each event type within the **event-handlers** folder. Feel free to remove values from the `Dispatcher` and the corresponding files in **event-handlers** for event types your project doesn't use. You'll need to remove the references in both of these sections in the Express application.

### Event Handlers
Each event type has a corresponding file within **event-handlers**. Each handler follows the naming convention of **TopicDomainEventHandlers.js**. Each function within each handler takes an `apiContext` object and an `eventPayload` object. You'll add your custom functionality within each of these functions based on the event you're targeting. 

For more information on `apiContext`, view the documentation for the [Mozu Node SDK](https://github.com/Mozu/mozu-node-sdk).

*Note: The Mozu Node SDK Web Toolkit contains a utility function for transforming an `apiContext` based on the event data your application receives. You can access this utility from **util > transform-apiContext.js**. By default, **transform-apiContext** is already configured in **routes > mozu-events.js**.*

The `eventPayload` is intended to be the full `request.body` object sent by Mozu. This convention gives your event handler access to the Mozu event data outside of the router. The most useful field within your function is typically the `entityId` field. This field indicates the unique ID used to access the object associated with this event. For example, in the case of the **customer.updated** event, the `entityId` will be the Customer ID for the customer that originated this event.

### /mozu.events
By default, the router listens for a POST call from Mozu's event service at the route **yourdomain.com/mozu.events**. Supply this route when creating event subscriptions within your Mozu application. For testing purposes, you can utilize a tool called [ngrok](https://ngrok.com/) to expose your computer's localhost over the public internet so that Mozu can reach the server running on your local computer. For more information, see [ngrok's documentation](https://ngrok.com/docs).

If you need to change this route, you'll need to potentially alter two files: **app.js** and **routes > mozu-events.js**.

Within **app.js**, this route is declared in two lines of code:

    var mozu_events = require('./routes/mozu-events');
    ...
    app.use('/mozu.events', mozu_events);
    
If you only need to change the route, edit the `'/mozu.events'` portion of the code to reflect the URL you'd rather use. For more information on routing in Express, [see their documentation](http://expressjs.com/en/guide/routing.html).

Within **routes > mozu-events.js**, the main route handling logic takes place. 

For convenience, a GET route on **/mozu.events** is included for testing your Express application. You can remove this route at any time. 

The route includes middleware for a Mozu utility that validates each request as originating from Mozu. If the request is valid, an `isValid` property is added onto the request object. Otherwise, a 401 response is issued and the default error page is rendered. To access the isValid later within the route, you'll use `request.mozu.isValid`. 

After validation, a 200 response is sent to Mozu before handling the event data within the application. This prevents additional retry events to fire when your application may have a long-running process within your event handler. The importance of this step is outlined in [this blog post about events in Mozu](https://www.mozu.com/blog/best-practices-for-handling-mozu-event-notifications/).

Next a utility is used to transform an existing `apiContext` object with values from the request headers sent by Mozu. Often, this is specific data about the object that originated the event, such as the Master Catalog, Catalog, or Site in which the object is contained. This allows for better and more targeted use with the Mozu Node SDK when you make API requests in your event handlers that respond to these events.

Finally, the Dispatcher object is called to resolve which event handler to use based on the event data field `topic`. The event handler is then fired with both the transformed `apiContext` and the event data passed as parameters.
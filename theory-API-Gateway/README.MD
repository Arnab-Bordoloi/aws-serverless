# All About API Gateway

## What is API Gateway
API Gateway is a fully managed service that helps you create API endpoints that can handle upto 10k requests per sec by default and can be scaled further by simply raising a support ticket.

It lets you configure routes to direct http requests to some code and is often used in conjunction with Lambda, to create APIs.

## What additional things it can do
It is much more than a HTTP router. It offeres a lot of useful features like _authN/Z_. So, you can _control who can access the API and what they are allowed to do_. It supports _request validation_ where you can set a schema model and have API Gateway validate the request for you so that only valid requests are passed through your Lambda function. It supports _rate limiting_ and _usage quotas_. It supports _web-sockets_ also to build a 2 way communications such as chat apps. It also supports _caching_ and it _integrates with cloud watch and cloud watch logs_ to give a built-in monitoring to see how APIs are performing and also to audit user requests. It also _integrates with AWS WAF_ to provide web application firewall capabilities which help stop SQL injection attacks as well as other attacks like Deniel-of-Service.


## What it cost
You don't pay for it if it is not used. In API Gateway, you pay for the number of requests the API Gayeway process for you.

## What are the key features/concepts
- Resources
- Stages
- Custom Domain Name

Resources are the blue print for the APIs where you need to define the available routes and for each route you need to define the public interface of this API method, otherwise known as Method Requests which consists of autherntication methods, request headers, the model to validate the request with and query strings etc..

GET /
POST /orders
GET /restaurants
POST /restaurants

A request is made against an integration target (Lambda function, HTTP, AWS service, VPC link).

When the integration target response, you can map the status code, HTTP headers and payload to the response format that you want to return to the caller of the HTTP endppoint.

Finally, the method response is the public interface of this API method, that a caller should expect in response. It is worth noting that the API Gateway doesnot do any validation to ensure that the actual response matches the interface. So, you have to do that in your own code and make sure that the method response model match with the application actually returns.

Once you deploy the blue-prints, you will have to deploy them to stage, which will have a base URL. All the routes you have configured is relative to this base URL. You can deploy the same set of resources to different stages and promote changes fromm one stage to another but to keep it simple, this is not used anymore. Instead, every stage is created as a separate API in API Gateway. Also features such as caching and throttling need to be configured at stage level and not as part of resources.

Another key concept is if you want to use a user froiendly domain name, you can use custom domain names to do that and you can use base path mapping to stich multiple API Gateway APIs under the same custom domain name, which is useful when you have microservices and you want to expose all under the same root.
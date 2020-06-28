
# Documentation portal - Angular web app

This prototype is a personal effort exclusively done on my own time. I did so to increase my knowledge of web app development and to create a demonstrator to support possible requests for R&D funding for such a project.

This particular instance is a stripped down version where confidential content has been removed. Its purpose is to demonstrate my knowledge of frameworks such as Angular and C#.NET, and of web or database related languages such as JS, CSS, SQL, _[XML](# "Ok, XML is not a programming language in a strict sense, but in this context it includes XML related programming languages such as XSLT")_, and others.

### What's it about?
The idea behind the documentation portal is to provide **access to always up to date documentation** and to **capture the knowledge** of the users of a product. In addition to that, it could serve as a platform for e-Learning and provide the means to query the incident database of the helpdesk service linked to the same product or project.

![](https://user-images.githubusercontent.com/8645726/85849625-94164700-b7ab-11ea-93bf-c5b4a276701f.PNG)

The documentation portal can provide access to several types of content:
* Documentation items as html
* E-Learning content as html, video and forms
* Knowledgebase articles as html
* Terminology content as text
* Incident related content from Remedy helpdesk service

### Documentation portal architecture summary
Without going into great depth, the **Angular** part of the documentation portal takes care of the **organization and presentation of the content**, and the **.NET Web API** part takes care of **collecting, parsing, transforming and assembling the content**.

![](https://user-images.githubusercontent.com/8645726/85877774-f6853c80-b7d7-11ea-8457-6ad5e1485c6b.png)


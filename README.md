### README.MD

### --- REPOSITORY NTABackend HAS TO BE USED IN COMBINATION WITH THIS ONE --- ###

First generate an API key and clientID at the hellosign website (this is an paid API!). In ./src/config/secrets.js type "export const clientId = YOUR_CLIENT_ID;" (case sensitive). This file is included in .gitignore

### About the project
This project manages the signing of legal binding documents using the HelloSign API. HelloSign is a company that companies use to let (e.g.) customers sign legally binding documents. Unfortunately, HelloSign's website does not have a lot of funcitonality, and moreover, documents have to be prepared by the administrators before it's sent to the customer for signing. The company I work for asked if it's possible to automate this process, as well as creating a more maintainable website, where documents are stored more organized and where you're able to also search for data thats on a document, instead of only the document name. Lastly, the workflow is not optimized for customers, who until now had to ask for papers before they could continue buying our product. This costs time, energy and manpower, and therefore we decided to automate this. The division that should be using this medium is called Onboarding and Compliance, and hence the name of this medium is call Global Catering Supplies Onboarding.

### Project concept
Now that the concept is clear, we can focus on the implementation. There are two strategies that the API offers: 1. Embedded signing; 2. Non-embedded signing. The difference is that with the embedded signing, the signing of the document happens on our website. The document is opened in an iFrame, and there HelloSign handles everything (populating fields, IP address checks, signing etc.) Whereas non-embedded signing redirects the customers to the hellosign website, and after signing again back to our website. Since we want it to be the easiest for the customer without too many redirections and different webpages, we choose the embedded signing. This also offers more stability on the long run (the salespeople from hellosign told us).

### Project features
Now that the idea is clear, we can go in depth about the features we need.
1. Administrators and salespeople need to be able to login. Only Administrators will be able to delete customers, companies or documents.
2. Clients must be able to go to the website and sign the documents they want right away. Also, if they're unsure about which documents to sign, they need to be able to take a roadmap. When filling in the required information, the roadmap "handles" the information and on the last step shows the available documents.
3. Customers must retrieve an email with the signed documents.

### Project screenshots
![Home LO](https://user-images.githubusercontent.com/106236504/193247615-53ded2e4-8349-4b90-95bf-66af1a91054b.png)

![Screenshot from 2022-09-30 11-42-49](https://user-images.githubusercontent.com/106236504/193246987-554d0630-f2e2-4183-9fa9-11eb5a83ba86.png)
![asdf 1](https://user-images.githubusercontent.com/106236504/193251426-29032161-ca57-4e9c-8024-544a310f3f87.png)
![asdf 2](https://user-images.githubusercontent.com/106236504/193251440-a27170f4-f584-4303-9953-6fd87e6b4cfc.png)
![asdfasdfasdf](https://user-images.githubusercontent.com/106236504/193251734-ab079b06-3846-4c1b-b18f-08e3fddd27ad.png)

![asdf 3](https://user-images.githubusercontent.com/106236504/193251447-e58c5363-fe2e-4466-897a-14c363b53185.png)

![Screenshot from 2022-09-30 11-44-39](https://user-images.githubusercontent.com/106236504/193247188-9f6abfc8-6786-4b40-8581-74479dcb1ef9.png)

![Screenshot from 2022-09-30 11-44-52](https://user-images.githubusercontent.com/106236504/193247207-c4700e99-dd9e-41d7-afd3-2fd55d06bcc3.png)

![Screenshot from 2022-09-30 11-45-15](https://user-images.githubusercontent.com/106236504/193247229-8590541f-769b-4c39-8aba-c6d8289aa4e1.png)
![Screenshot from 2022-09-30 11-45-59](https://user-images.githubusercontent.com/106236504/193247233-294bbaa4-afc7-4a97-9445-c8988b79bd67.png)


![Screenshot from 2022-09-30 11-46-18](https://user-images.githubusercontent.com/106236504/193247262-8548235d-154f-4eed-9093-05f51e64d051.png)
![Screenshot from 2022-09-30 11-46-12](https://user-images.githubusercontent.com/106236504/193247254-6298c7e0-2c0a-40d7-8df5-e06bad719756.png)

![Screenshot from 2022-09-30 11-46-34](https://user-images.githubusercontent.com/106236504/193247269-d52c621d-e525-480d-9e82-7978ee703516.png)
![Screenshot from 2022-09-30 11-46-50](https://user-images.githubusercontent.com/106236504/193247279-4d38ffae-1f72-4f22-a845-7c686bc3bd58.png)
![Screenshot from 2022-09-30 11-47-05](https://user-images.githubusercontent.com/106236504/193247287-580e833a-0473-4dee-9033-3dfc721f2dcd.png)

![Screenshot from 2022-09-30 12-16-20](https://user-images.githubusercontent.com/106236504/193248914-228219d7-4681-4350-81dd-c2a21fd346c0.png)


![Screenshot from 2022-09-30 11-47-22](https://user-images.githubusercontent.com/106236504/193247293-a2b39e04-efa5-4ab3-83ab-3b282b0f3434.png)
![Screenshot from 2022-09-30 11-47-33](https://user-images.githubusercontent.com/106236504/193247306-212c2e08-75d3-4ee5-bd43-060d5fe490b9.png)
![Screenshot from 2022-09-30 11-47-37](https://user-images.githubusercontent.com/106236504/193247309-27685cce-b5ea-4ecf-a400-500bfa0211b2.png)
![Screenshot from 2022-09-30 11-47-46](https://user-images.githubusercontent.com/106236504/193247325-bd28a42a-fd51-4b24-87c3-108097f928de.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Getting Started

once you clone or fork the project, 
install dependencies and start application by:

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### Q/A

#### Q. How did you decide which technologies to use as part of your solution?
    Given that react and javascript were must have, I then looked at the scale of the project as well as the server, decided some paths I could go were to use react/redux,
    or simple react with crud operations. Then looking at the time given, I decided that because the scale of the project is not very big, as well as the data for the server given to me, there was no need to use react/redux, although using it would help with scalability, and as such I went with simple react/javascript coding and crud operations to access the json server.

#### Q. Are there any improvements you could make to your submission?
    Yes there are. I would definitely improve the overall UI if I had a good design, but since I am sadly lacking in the arts department, I could not come up with anything.
    I would also use react/redux to improve the overall flow of the project, by using a central store to help keep track of state in order to make each of the components more pure and compartmentalized. I would also change the way I accessed the data. In this particular project, the data I was given in the json server was extremely small, making it easier to access it once, grab all the data, and store it in the state for future use instead of making a call to the server everytime I needed to grab a particular. However if I was dealing with lets say 10,000 - 100,000 candidates each with their own application, then making calls only when needed would make more sense to improve load times as well as user experience. There are definitely more stuff I would change, but these are some of the bigger things I can definitely improve on.

#### Q. What would you do differently if you were allocated more time?
    pretty much everything in the previous question if I could. I would also focus more on scalability in case the data being used is in the 10,000 - 100,000 range.

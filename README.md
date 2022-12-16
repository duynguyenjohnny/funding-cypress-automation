# cypress-api-testing

1. Download and install Nodejs, Cypress
2. open terminal inside Visual Studio Code and input: 
npm install
3. to run test: 
npm run test
4. to open cypress: 
npm run cy:open

# cypress-ui-testing

1. Firstly we need to create unique data-cy for all elements inside the website to catch up.
2. To get the total number when hover we have to use invoke('show') then get the text inside
3. To get all percentages here is a big challenge, my solution is: add data-cy for each industry, and then using hover invoke to get the percentage and sort them.  

# others
1. We can run parralel by combining cypress with gitlab
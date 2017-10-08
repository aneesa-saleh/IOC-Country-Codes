# IOC-Country-Codes
IOC country codes mapped to country names. 

### Usage
JSON file `IOCCountryNames.json` contains an object to map IOC codes to country names. To get the country name coresponding to an IOC code, use `countryNames[code]`.

Example: 
```
  //request JSON file and save in variable countryNames
  var country = countryNames["GER"]; 
  console.log(country);
```
This will print out "Germany".

### Country Codes Source
[Judo Info](http://judoinfo.com/ioccodes/).

# MapApp

This project is a GPS app built with Angular.js and integrated with the Google Maps API. It provides functionalities like showing the current location, zooming in and out, and basic map interactions. It serves as a starting point for a more feature-rich GPS application.



## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)



## Getting Started

1. Install dependencies:

   ```bash
   cd map-app
   npm install
   ```

2. Add your Google Maps API key in `index.html`:

   ```html
   <!-- index.html -->
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places"></script>
   ```

   Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual Google Maps API key.



## Project Structure

```plaintext
map-app/
|-- src/
|   |-- app/
|       |-- components/
|       |   |-- map/
|       |       |-- map.component.ts
|       |       |-- map.component.html
|       |       |-- map.component.css
|       |-- services/
|       |   |-- google-maps.service.ts
|       |-- app.component.ts
|       |-- app.module.ts
|       |-- app-routing.module.ts
|       |-- app.component.html
|       |-- app.component.css
|-- index.html
|-- angular.json
|-- tsconfig.json
|-- package.json
```



## Usage

1. Run the application:

   ```bash
   ng serve
   ```

2. Open your browser and visit `http://localhost:4200/` to see the basic map.



## Features

- Display current location
- Zoom in and out
- Basic map interaction



## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).



## License

This project is licensed under the [MIT License](LICENSE).



## Author

👤 **Aras Güngöre**

* LinkedIn: [@arasgungore](https://www.linkedin.com/in/arasgungore)
* GitHub: [@arasgungore](https://github.com/arasgungore)

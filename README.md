# Ollama Wrapper

This is a Ollama wrapper for interacting with the [Ollama](https://ollama.com) API, allowing you to seamlessly integrate Ollama's capabilities into your applications. The wrapper requires you to have Ollama running locally on your computer.

## Prerequisites

1. **Ollama Installation**  
   To use this wrapper, you must have Ollama installed on your local machine. Follow the instructions [here](https://ollama.com/download) to install Ollama if you haven't done so already.

2. **Local Ollama Server**  
   Ensure that the Ollama server is running locally. You can start the server with:
   ```bash
   ollama start
   ```

> **Note:** Ensure that Ollama is running on `http://localhost:11432`. Adjust the `base_url` if your setup uses a different port.

## Features

- **Easy integration**: Simplifies interaction with Ollama's API.
- **Local execution**: Runs entirely on your local machine for privacy and speed.
- **Customizable**: Easily adaptable for various use cases.

## Troubleshooting

If you encounter issues, ensure that:
- Ollama is installed and running on your local machine.
- The `base_url` in `OllamaClient` points to the correct port where Ollama is running.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Feel free to submit issues and pull requests to help improve this project. Contributions are always welcome!

# Ollama Wrapper

This is a Python wrapper for interacting with the [Ollama](https://ollama.com) API, allowing you to seamlessly integrate Ollama's capabilities into your applications. The wrapper requires you to have Ollama running locally on your computer.

## Prerequisites

1. **Ollama Installation**  
   To use this wrapper, you must have Ollama installed on your local machine. Follow the instructions [here](https://ollama.com/download) to install Ollama if you haven't done so already.

2. **Local Ollama Server**  
   Ensure that the Ollama server is running locally. You can start the server with:
   ```bash
   ollama start
   ```

3. **Python Dependencies**  
   This project requires Python 3.6+ and some additional packages. Install the dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/YourUsername/ollama-wrapper.git
   cd ollama-wrapper
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

Here’s a simple example of how to use the wrapper:

```python
from ollama_wrapper import OllamaClient

# Initialize the client
client = OllamaClient(base_url="http://localhost:8000")

# Example request
response = client.get_response(prompt="Hello, Ollama!")
print(response)
```

> **Note:** Ensure that Ollama is running on `http://localhost:8000`. Adjust the `base_url` if your setup uses a different port.

## Configuration

You can configure the wrapper by editing `config.py` or passing parameters directly to the `OllamaClient` instance.

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

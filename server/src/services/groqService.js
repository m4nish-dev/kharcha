import config from '../config/index.js';

/**
 * Placeholder Groq AI service.
 * The actual implementation will call the Groq API in future steps.
 * The API key is read from server-side environment variables only.
 */
class GroqService {
  constructor() {
    this.apiKey = config.groqApiKey;
    this.model = config.groqModel;
  }

  /**
   * Check whether the Groq service is configured with an API key.
   */
  isConfigured() {
    return Boolean(this.apiKey);
  }

  /**
   * Placeholder — will send a prompt to the Groq API and return the response.
   * @param {string} _prompt - The user prompt
   * @returns {Promise<string>}
   */
  async chat(_prompt) {
    if (!this.isConfigured()) {
      throw new Error('Groq API key is not configured');
    }

    // Future implementation will go here.
    throw new Error('Groq chat is not yet implemented');
  }
}

// Export a singleton instance
const groqService = new GroqService();
export default groqService;

import { BaseLlmParameters } from '../core/index.js';
import {
  ChatMessages,
  CompletionPostResponse,
  InputParamsEntry,
  LLMModuleConfig
} from './api/index.js';

/**
 * Input Parameters for GenAI hub chat completion.
 */
export type GenAiHubCompletionParameters = BaseLlmParameters &
  OrchestrationCompletionParameters;

/**
 * Response for GenAI hub chat completion.
 */
export type GenAiHubCompletionResponse = CompletionPostResponse;
/**
 * Wrapper object to configure prompt.
 */
export interface PromptConfig {
  /**
   * History.
   */
  messages_history?: ChatMessages;
  /**
   * Template.
   */
  template: ChatMessages;
  /**
   * Template Parameters.
   */
  template_params?: Record<string, InputParamsEntry>;
}

/**
 * Wrapper object to configure LLMModule.
 */
export type LlmConfig = LLMModuleConfig;

/**
 * Wrapper object to encompass Orchestration options.
 */
export interface OrchestrationCompletionParameters {
  /**
   * Prompt options.
   */
  prompt: PromptConfig;
  /**
   * Llm configuration options.
   */
  llmConfig: LlmConfig;
}
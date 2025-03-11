import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
//import { openai } from '@ai-sdk/openai';
//import { fireworks } from '@ai-sdk/fireworks';
//import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { openrouter } from '@openrouter/ai-sdk-provider';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

/*const openrouter = createOpenRouter({
  apiKey: 'YOUR_OPENROUTER_API_KEY',
});*/

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model-small': chatModel,
        'chat-model-large': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'deepseek-free': openrouter.chat('deepseek/deepseek-r1:free')
        //'chat-model-small': openai('gpt-4o-mini'),
        //'chat-model-large': openai('gpt-4o'),
        //'chat-model-reasoning': wrapLanguageModel({
        //  model: fireworks('accounts/fireworks/models/deepseek-r1'),
        //  middleware: extractReasoningMiddleware({ tagName: 'think' }),
        //}),
        //'title-model': openai('gpt-4-turbo'),
        //'artifact-model': openai('gpt-4o-mini'),
      },
      //imageModels: {
      //  'small-model': openai.image('dall-e-2'),
      //  'large-model': openai.image('dall-e-3'),
      //},
    });

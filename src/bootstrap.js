// default monaco-editor imports
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

// utilities to override Monaco services
import { initialize } from 'vscode/services'
import getConfigurationServiceOverride, { updateUserConfiguration } from '@codingame/monaco-vscode-configuration-service-override'

const value = `
function fun(x) {
    return x;
}

fun()
`

export async function bootstrap() {

    window.MonacoEnvironment = {
        getWorker: (_moduleId, _label) => new editorWorker()
      }
      
      // overriding Monaco service with VSCode
      await initialize({
          ...getConfigurationServiceOverride(),
      });
      
      // json config like in vscode settings.json
      updateUserConfiguration(`{
          "editor.fontSize": 14,
          "editor.fontFamily": "monospace",
          "editor.letterSpacing": 0,
      }`)
      

      
      // creating an editor with VSCode configuration
      return monaco.editor.create(document.getElementById('container'), {
          value,
      },  { language: 'javasript' });    
}

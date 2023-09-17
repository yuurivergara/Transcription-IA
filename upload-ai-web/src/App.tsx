import { Button } from "./components/ui/button";
import {Github, FileVideo, Upload, Wand2} from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💙 por Yuri</span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2"/>
            Github
            </Button>
        </div>
      </div>

      <div className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
            placeholder="Inclua o prompt para a IA..."
            className="resize-none p-4 leading-relaxed"
            />
            <Textarea 
            placeholder="Resultado gerado pela IA" 
            className="resize-none p-4 leading-relaxed"
            readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{"{transcription}"}</code> no seu prompt para adicionar o conteúdo da transcrição do video selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
            className="border w-full flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            htmlFor="video">
              <FileVideo className="w-4 h-4"/>
              Selecione um video
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
              <Textarea 
              id="transcription-prompt" 
              className="resize-none h-20 leading-relaxed"
              placeholder="Inclua palavras chaves mencionadas no video separadas por (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar video
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>
          <Separator/>
          <form className="space-y-6">
          <div className="space-y-2">
              <label>Prompt</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">
                    Título do YouTube
                  </SelectItem>
                  <SelectItem value="description">
                    Descrição do YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label>Modelo</label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">
                    GTP 3.5-turbo 16K
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">Você poderá customizar esta opção em breve</span>
              
            </div>
              <Separator/>
              <div className="space-y-2">
              <label>Temperatura</label>
              <Slider 
              min={0}
              max={1}
              step={0.1}
              />
              <span className="block text-sm text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
              
            </div>
            <Separator/>
            <Button type="submit"
            className="w-full"
            >
              Executar
              <Wand2 className="h-4 w-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </div>
    </div>
  )
}


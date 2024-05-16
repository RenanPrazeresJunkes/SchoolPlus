export default function SlackVideoContent() {
    return(
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-auto space-y-3">
          <h3 className="text-lg font-semibold mb-4">Conteúdo</h3>
          <div className="grid gap-4">
            <div className="flex gap-4 border rounded p-3">
              <h3>01</h3>
              <div>
                <h4 className="text-base font-semibold line-clamp-2">Introdução a programação</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  4 min
                </p>
              </div>
            </div>
            
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4 border rounded p-3">
              <h3>02</h3>
              <div>
                <h4 className="text-base font-semibold line-clamp-2">Criando o ambiente de desenvolvimento</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  6 min
                </p>
              </div>
            </div>
            
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4 border rounded p-3">
              <h3>03</h3>
              <div>
                <h4 className="text-base font-semibold line-clamp-2">Declaração de variáveis</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  2 min
                </p>
              </div>
            </div>
            
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4 border rounded p-3">
              <h3>04</h3>
              <div>
                <h4 className="text-base font-semibold line-clamp-2">Condições</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  10 min
                </p>
              </div>
            </div>
            
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4 border rounded p-3">
              <h3>05</h3>
              <div>
                <h4 className="text-base font-semibold line-clamp-2">Laços de repetição</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  12 min
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
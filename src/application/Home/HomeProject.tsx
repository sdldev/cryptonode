import { Container } from '@/components/Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

const HomeProject = () => {
  return (
    <Container className="py-8 text-center">
      <Tabs defaultValue="mainnet" className="w-full p-2">
        <TabsList className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <TabsTrigger value="mainnet">MAIN NET</TabsTrigger>
          <TabsTrigger value="testnet">TEST NET</TabsTrigger>
        </TabsList>

        <TabsContent value="mainnet">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Crossfi</CardTitle>

              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3 w-[150px]">
                  <div className="overflow-hidden rounded-md">
                    <img alt="Thinking Components"
                      loading="lazy" width="150"
                      height="150" decoding="async"
                      data-nimg="1"
                      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                      src="/project/crossfi.jpg">
                    </img>
                  </div>
                </div>

                <p>CrossFi Chain is a layer 1 blockchain with a modular architecture. It consists of two integral parts, Cosmos and EVM. Each part is responsible for its specific functionality, with their work completely synchronized as a single organism.</p>
              </CardContent>
              <CardFooter>
                <p><a href="/"></a></p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="testnet">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Crossfi</CardTitle>

              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3 w-[150px]">
                  <div className="overflow-hidden rounded-md">
                    <img alt="Thinking Components"
                      loading="lazy" width="150"
                      height="150" decoding="async"
                      data-nimg="1"
                      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                      src="/project/crossfi.jpg">
                    </img>
                  </div>
                </div>

                <p>CrossFi Chain is a layer 1 blockchain with a modular architecture. It consists of two integral parts, Cosmos and EVM. Each part is responsible for its specific functionality, with their work completely synchronized as a single organism.</p>
              </CardContent>
              <CardFooter>
                <p><a href="/"></a></p>
              </CardFooter>
            </Card>
          </div>

        </TabsContent>
      </Tabs>
    </Container>
  );
};
export default HomeProject;

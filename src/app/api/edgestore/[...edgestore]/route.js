import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const es = initEdgeStore.create();

const edgeStroeRouter = es.router({
  myPublicImages: es.imageBucket(),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStroeRouter,
});

export { handler as GET, handler as POST };

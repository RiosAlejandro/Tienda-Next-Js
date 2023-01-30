import { getItems } from "@/services/itemServices";

export async function getPathsFromIds() {/* funcion para obtener la info de los objetos */
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title), /* cada id de los objetos */
      },
    };
  });

  return ids;
}

export async function getItemData(id) {
  const items = await getItems(); /* copio los datos del feching */

  const product = items.find(item => convertToPath(item.title) === id); /**busco una coincidencia con el id que le pase y retorno */

  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
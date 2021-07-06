import { Command } from "../interfaces/commands";

export const commands: Command[] = [
  {
    label: "t! search",
    description:
      "Notifica a todas los servidores que alguien está buscando equipo. Recomendamos ver la guía en que se encuentra en Partys.",
  },
  {
    label: "t! add-region",
    description:
      "Añade una región al servidor de discord. Si se añade NA por ejemplo, se notificará al sevidor cuando alguien perteneciente a NA busque equipo",
  },
  {
    label: "t! delete-region",
    description: "Elimina la región del servidor de discord",
  },

  {
    label: "t! add",
    description:
      "Vincula tu cuenta de League of Legends con tu cuenta de discord. Con esto se podrá mencionar a un usuario de discord en los comandos",
    img: {
      urlImage: "/index/add.png",
      widthImg: 416,
      heightImg: 795,
    },
  },
  {
    label: "t! regions",
    description: "Muestra todas las regiones",
    showTriangle: true,
    img: {
      urlImage: "/index/regions.png",
      widthImg: 259,
      heightImg: 660,
    },
  },
  {
    label: "t! soloq",
    description: "Muestra sus estadísticas de soloq",
    showTriangle: true,
    img: {
      urlImage: "/index/soloq.png",
      widthImg: 508,
      heightImg: 676,
    },
  },
  {
    label: "t! flex",
    description: "Muestra las estadísticas de flex",
    showTriangle: true,
    img: {
      urlImage: "/index/flex.png",
      widthImg: 507,
      heightImg: 680,
    },
  },
  {
    label: "t! lastmatch",
    description: "Muestra sus estadísticas del juego más reciente",
    showTriangle: true,
    img: {
      urlImage: "/index/lastmatch-flex.png",
      widthImg: 506,
      heightImg: 645,
    },
  },
];

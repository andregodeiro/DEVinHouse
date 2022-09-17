import { CardList } from "./CardList";
import { Summary } from "./Summary";
import { TipCard } from "./TipCard";
import PropTypes from "prop-types";

const umaDica = {
  titulo: "uma dica",
  descricao:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum labore saepe laboriosam? Illo dolor eveniet perspiciatis unde totam commodi quas explicabo maiores non voluptate quidem architecto, quae odit nihil ab aliquam esse inventore adipisci voluptas qui? Consectetur, sint? Ipsa hic atque blanditiis iure a aut debitis error enim aliquam.",
  linguagem: "uma linguagem",
  categoria: "Front-End",
  video: "https://www.youtube.com/watch?v=vwbegraDXD8",
};

export const MainContent = ({}) => {
  return (
    <>
      <Summary />
      <TipCard tip={umaDica} />
    </>
  );
};

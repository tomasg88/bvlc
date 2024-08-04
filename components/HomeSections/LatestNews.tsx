import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'components/Button/Button';
import CardNews from 'components/CardNews/CardNews';
import { News } from 'types/models';

type LatestNewsProps = {
  recentNews: News[];
};

export const LatestNews = ({ recentNews }: LatestNewsProps) => (
  <>
    <div className="flex flex-col items-center justify-center max-w-6xl pt-24 pb-6 mx-auto border-b-2 border-yellow-400 md:flex-row">
      <Fade cascade>
        <h2 className="text-5xl font-light text-center text-gray-900 ">Últimas noticias</h2>
      </Fade>
    </div>
    <div className="grid max-w-6xl gap-3 p-8 pb-12 mx-auto mt-6 lg:grid-cols-3 sm:grid-cols-2">
      {recentNews && recentNews.map((n) => <CardNews {...n} key={n._id} />)}
    </div>
    <Button text="Ver todas las Noticias" href="/noticias" />
  </>
);

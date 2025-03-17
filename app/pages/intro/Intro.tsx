// import type { Route } from './+types/home-page';

import './intro.scss';
// export function meta({}: Route.MetaArgs) {
export function meta() {
  return [
    { title: 'Кабинет / Привет!' },
    // { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function IntroPage() {
  return (
    <div className="test">
      <div className="">
        <div className="">
          <p className="">
            Портал создан для вашей комфортной работы,
            ее упрощения и ускорения =)
          </p>
          <p className="">Чтобы ничего не упустить рекомендуем пройти онбординг, который расскажет о работе портала. Это можно сделать сейчас или вернуться к этому позже с помощью бота</p>
        </div>
        <div className="">
          {/* <button type="button" className="flex-1  h-12 inline-grid text-base items-center text-center px-7 border border-gray-800 rounded-full">Пройти онбординг</button> */}

        </div>
      </div>

    </div>
  );
}

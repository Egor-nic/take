import HowToStartSection from '~/FSD/entities/HowToStartSection/HowToStartSection';

export function meta() {
  return [
    { title: 'Тема / цвета' },
  ];
}

export default function Home() {
  return (
    <>
      <HowToStartSection />
    </>
  );
}

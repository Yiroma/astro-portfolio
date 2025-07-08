export default function SkillsBar() {
  return (
    <div className="hero-content mx-auto flex w-full flex-col gap-4 md:px-16">
      <h2 className="mb-4 text-center text-2xl font-bold">Mes Compétences - TEST</h2>
      <div className="bg-red-500 p-4 text-white">
        <p>Si vous voyez ce texte rouge, le composant React fonctionne !</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="rounded bg-blue-500 px-4 py-2 text-white">React</div>
        <div className="rounded bg-green-500 px-4 py-2 text-white">TypeScript</div>
        <div className="rounded bg-purple-500 px-4 py-2 text-white">Tailwind</div>
      </div>
    </div>
  );
}

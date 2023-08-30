'use client';

export default function Home() {
  return (
    <main>
      <section className="boxes-container">
        <h1>Use the button to toggle a Timeline</h1>
        <div>
          <button>Toggle Timeline</button>
        </div>
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
      </section>
    </main>
  );
}

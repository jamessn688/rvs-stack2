import heroImage from "@/assets/hero-stress.jpg";

const PersonalStory = () => {
  return (
    <section className="section-light py-14 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-3">A Real Story From Someone Just Like You</p>
        <img
          src={heroImage}
          alt="Woman stressed over bills at kitchen table"
          className="w-full rounded-lg mb-10 shadow-lg"
          loading="eager"
        />

        <div className="font-body text-foreground/90 space-y-6 leading-relaxed text-lg md:text-xl">
          <p>
            <span className="float-left text-7xl md:text-8xl font-heading font-black leading-none mr-3 mt-1" style={{ color: "hsl(var(--primary))" }}>h</span>
            ad a 750 credit score and $30,000 in credit card debt. Everyone thought I was doing fine. My colleagues saw someone who owned a car, took vacations, and always picked up the check. My family thought I was thriving. My husband—we'd been married eleven years—didn't know the truth.
          </p>

          <p>
            I was paying them $900 a month. They were charging me $850 in interest. I was the hamster in their wheel. That's the game they designed.
          </p>

          <div className="border-l-4 border-accent pl-6 py-4 my-8 rounded-r-lg" style={{ backgroundColor: "hsl(var(--accent) / 0.08)" }}>
            <p className="font-heading font-bold text-foreground text-xl md:text-2xl italic">
              "Every month I'd pay $900. And every month, I'd open the next statement and the balance had barely moved. The math never made sense to me—until it finally did."
            </p>
          </div>

          <p>
            The minimum payment trap is brutal in its simplicity. Of that $900 I was paying each month, approximately <strong>$850 was going straight to interest charges</strong>. Only $50—five percent—was actually reducing what I owed. I was essentially renting my debt.
          </p>

          <p>
            There were 3 AM moments. Lying awake, calculator open on my phone, doing the math over and over, hoping it would somehow change. It didn't. I felt profound shame—the kind that makes you avoid conversations about money, changes how you move through the world, makes you feel like a fraud in your own life.
          </p>

          <p>
            I'd told myself the same story so many times it felt true: <em>"I'm responsible. I have good credit. I'll figure this out."</em> But good credit isn't a measure of financial health. It's a measure of how reliably you pay the banks their interest. I was very, very good at that.
          </p>

          <p>
            What changed everything wasn't a windfall or a promotion. It was a phone call that took less than 30 minutes. And I want to tell you exactly what I learned—because nobody teaches this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;

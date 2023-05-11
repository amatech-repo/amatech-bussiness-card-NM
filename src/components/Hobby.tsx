type Props = {
  hobbyText: string;
};

export const Hobby = ({ hobbyText }: Props) => {
  return (
    <>
      <section className="section_interest">
        <h2 className="interest">Hobby</h2>
        <p className="hobby__text">{hobbyText}</p>
      </section>
    </>
  );
};

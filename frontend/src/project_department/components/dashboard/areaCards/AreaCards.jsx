import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Today's Sales",
          value: "Tzs 200,000/=",
          text: "We have sold 123 items.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Today's Revenue",
          value: "Tzs 500,000/=", // Fixed typo in value
          text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "Tzs 100,000/=",
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;

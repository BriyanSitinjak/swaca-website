import { site } from "@/content/site";
import { PriceLines } from "@/components/ui/PriceLines";
import { bodyText, cardBody, cardTitle } from "@/components/ui/styles";

export function PickupSummary() {
  const { pickup } = site;

  return (
    <>
      <p className={`mt-3 text-pretty ${bodyText}`}>{pickup.freeNote}</p>
      <p className={cardBody}>{pickup.schedule}</p>
    </>
  );
}

export function PickupPolicy() {
  const { pickup } = site;

  return (
    <div>
      <h3 className={cardTitle}>{pickup.title}</h3>
      <PickupSummary />
      <p className={`mt-4 ${bodyText}`}>{pickup.paidNote}</p>
      <div className="mt-2">
        <PriceLines lines={pickup.fees} compact />
      </div>
      <p className={`mt-4 ${bodyText}`}>{pickup.billingNote}</p>
    </div>
  );
}

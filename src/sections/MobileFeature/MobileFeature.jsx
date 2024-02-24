export default function MobileFeature() {
  return (
    <div className="flex justify-between px-40 pt-20 items-center bg-[#F1F5F9]">
      <div>
        <img src="/mobile.svg" alt="mobile" className="w-[600px]" />
      </div>
      <div className="gap-10 flex flex-col">
        <h1 className="text-[#0F172A] text-7xl font-bold">
          Sagittis sapien viverra
        </h1>
        <p className="text-[#0F172A] text-xl leading-loose">
          Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor
          tellus. Diam fringilla sed <br /> volutpat facilisi. Pulvinar
          vulputate facilisis vel eros. Auctor metus sed auctor tortor sed
          nulla. <br /> Urna massa eu vel blandit sed nisi gravida. Imperdiet
          parturient at purus bibendum risus <br /> auctor lacus tristique arcu.
          Arcu hac cursus faucibus id. Eu integer parturient risus magna <br />{" "}
          eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel
          mattis quis dui, <br /> condimentum mi volutpat ut aliquam.
        </p>
      </div>
    </div>
  );
}

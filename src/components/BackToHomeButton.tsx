import CustomButton from "./CustomButton";

export const BackToHomeButton = () => {
  return (
    <CustomButton
      to="/"
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      Back to Home
    </CustomButton>
  );
};

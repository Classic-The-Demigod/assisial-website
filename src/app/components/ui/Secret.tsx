import { SecretList as SecretListProps } from "@/app/utils";

const Secret = ({ id, title, content }: SecretListProps) => {
  return (
    <>
      <h1>
        {id}. {title}
      </h1>

      <p className="text-lg text-[#9B9B9B]">{content}</p>
    </>
  );
};

export default Secret;

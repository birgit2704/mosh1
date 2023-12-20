import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const SingleUserPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>SingleUserPage {id}</div>;
};

export default SingleUserPage;

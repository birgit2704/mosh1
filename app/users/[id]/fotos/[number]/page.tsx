import React from "react";

interface Props {
  params: { id: number; number: number };
}

const SingleUserPhotoPage = ({ params: { id, number } }: Props) => {
  return (
    <div>
      SingleUserPhotoPage User: {id} Photo {number}
    </div>
  );
};

export default SingleUserPhotoPage;

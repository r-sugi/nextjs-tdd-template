import { HttpErrorObject } from "@/error/errors/http-error";

export const Error = ({ name, message, http }: HttpErrorObject) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
      <div>
        <p>{http.status}</p>
        <p>{http.statusText}</p>
        <p>{http.url}</p>
      </div>
    </div>
  );
};

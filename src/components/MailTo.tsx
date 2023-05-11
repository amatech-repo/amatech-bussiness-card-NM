import React from "react";

type Props = {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children: React.ReactNode;
};
export const MailTo = ({ email, subject = "", body = "", children }: Props) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a href={`mailto:${email}${params}`} className="mail">
      {children}
    </a>
  );
};

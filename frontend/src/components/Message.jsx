export default function Message({ variant = "alert-info", children }) {
  return (
    <div role="alert" className={`my-10 alert alert-soft ${variant}`}>
      {children}
    </div>
  );
}

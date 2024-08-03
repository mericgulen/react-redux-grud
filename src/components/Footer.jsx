function Footer() {
  return (
    <div className=" py-2 px-4 bg-dark">
      <div className=" px-4 d-flex justify-content-center align-items-center opacity-50 ">
        <span>@mgDev</span>
        <span className="ms-3">{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
export default Footer;

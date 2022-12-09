export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select
      placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Characters</option>
      <option>Zlodey</option>
    </select>
  );
};

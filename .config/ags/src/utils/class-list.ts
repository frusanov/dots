export function classList(obj: { class_names: string[] }) {
  const has = (name: string) => obj.class_names.includes(name);
  const add = (name: string) => {
    if (!has(name)) obj.class_names.push(name);
  };
  const remove = (name: string) => {
    if (has(name)) obj.class_names = obj.class_names.filter((n) => n !== name);
  };
  const toggle = (name: string, presence?: boolean) => {
    if (presence === undefined) presence = !has(name);
    presence ? add(name) : remove(name);
  };

  return {
    has,
    add,
    remove,
    toggle,
  };
}

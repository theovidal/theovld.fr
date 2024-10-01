export default function(obj, mapFn) {
  return Object.fromEntries(
    Object.keys(obj).map((key) => [key, mapFn(obj[key])])
  );
}

import v4 from "./v4";

function pm_v4(options, buf, offset) {
  if (!options.prefix && !options.suffix) {
    throw new Error("uuid.pm_v4(): options.prefix or options.suffix is required");
  }

  if (options.prefix && options.suffix) {
    throw new Error("uuid.pm_v4(): options.prefix and options.suffix are mutually exclusive");
  }

  if (options.prefix) {
    return `${options.prefix}-${v4(options, buf, offset)}`;  
  }

  if (options.suffix) {
    return `${v4(options, buf, offset)}-${options.suffix}`;  
  }

  return v4(options, buf, offset);
}
  
  export default pm_v4;

/**Write a function named guardrail that will accept one argument mathFunction (Function).*/

export default function guardrail(mathFunction) {
  const queue = [];
  let result;

  try {
    result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}

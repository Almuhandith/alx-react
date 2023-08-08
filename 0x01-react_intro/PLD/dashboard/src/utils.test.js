import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"

test('return current year', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});

test("correct footer copy",()=>{
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('returns right notification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});
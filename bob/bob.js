//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const bAllLettersCapital = (string) => {
  const regex = /[A-Za-z]/g;
  const filteredString = string.match(regex);

  if (filteredString === null) {
    return false;
  }

  const isAllCapital = filteredString.every(
    (letter) => letter === letter.toUpperCase()
  );

  return isAllCapital;
};

const bEndsWithQuestionMark = (string) => {
  return string.trim().endsWith('?');
};

const bContainsLetters = (string) => {
  const regex = /[A-Za-z]/g;
  const filteredString = string.match(regex);
  return filteredString === null ? false : true;
};

const bContainsNumbers = (string) => {
  const regex = /[0-9]/g;
  const filteredString = string.match(regex);
  return filteredString === null ? false : true;
};

const bEmptyString = (string) => {
  if (string === '') {
    return true;
  }
  if (!bContainsLetters(string) && !bContainsNumbers(string)) {
    return true;
  }
  return false;
};

export const hey = (message) => {
  if (bAllLettersCapital(message) && bEndsWithQuestionMark(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (bAllLettersCapital(message) && !bEndsWithQuestionMark(message)) {
    return 'Whoa, chill out!';
  } else if (bEndsWithQuestionMark(message)) {
    return 'Sure.';
  } else if (bEmptyString(message)) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

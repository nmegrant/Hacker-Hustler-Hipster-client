import axios from "../axios";

export function fetchedSkills(skills) {
  return {
    type: "FETCHED_SKILLS",
    payload: skills,
  };
}

export function fetchSkillsThunkCreator() {
  return async function fetchSkills(dispatch, getState) {
    try {
      const skills = await axios.get(
        // `http://localhost:4000/skills`
        // `https://hacker-hustler-hipster.herokuapp.com/skills`
        `/skills`
      );
      dispatch(fetchedSkills(skills.data));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
}

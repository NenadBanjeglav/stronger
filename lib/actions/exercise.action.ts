"use server";

const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d426d14a2dmshb36cf08bc0f9d4cp1967b6jsnb85f1138ff2c",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

interface GetExercisesParams {
  offset?: number;
  limit?: number;
  searchQuery?: string;
  filter?: string;
}

export async function getExercises(params: GetExercisesParams) {
  const { searchQuery, filter, offset = 0, limit = 0 } = params;

  if (!filter && !searchQuery) {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}&offset=${offset}`,
        exerciseOptions
      );
      const exercises = await response.json();

      const totalExercises = exercises.length;
      const isNext = totalExercises > offset;

      return { exercises, isNext };
    } catch (error) {
      console.log(`Error fetching exercises:`, error);
      throw error;
    }
  }

  if (searchQuery && filter) {
    if (filter === "all") {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery}?limit=${limit}&offset=${offset}`,
          exerciseOptions
        );
        const exercises = await response.json();

        const totalExercises = exercises.length;
        const isNext = totalExercises > offset;

        return { exercises, isNext };
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery}?limit=${limit}&offset=${offset}`,
          exerciseOptions
        );
        const data = await response.json();
        const exercises = data.filter((el: any) => el.bodyPart === filter);

        const totalExercises = exercises.length;
        const isNext = totalExercises > offset;

        return { exercises, isNext };
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }

  if (searchQuery && !filter) {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery}?limit=${limit}&offset=${offset}`,
        exerciseOptions
      );
      const exercises = await response.json();

      const totalExercises = exercises.length;
      const isNext = totalExercises > offset;

      return { exercises, isNext };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  if (filter && !searchQuery) {
    if (filter === "all") {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}&offset=${offset}`,
          exerciseOptions
        );
        const exercises = await response.json();
        const totalExercises = exercises.length;
        const isNext = totalExercises > offset;

        return { exercises, isNext };
      } catch (error) {
        console.log(`Error fetching exercises:`, error);
        throw error;
      }
    } else {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${filter}?limit=${limit}&offset=${offset}`,
          exerciseOptions
        );
        const exercises = await response.json();

        const totalExercises = exercises.length;
        const isNext = totalExercises > offset;

        return { exercises, isNext };
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
}

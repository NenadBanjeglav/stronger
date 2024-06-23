/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExerciseProps {
  exercise: {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
  };
}

const ExerciseCard = ({ exercise }: ExerciseProps) => {
  return (
    <Link
      className="shadow-light-100 rounded-[10px] border-2 border-orange-200 bg-light-900 p-9 sm:px-11"
      href={`/exercise/${exercise.id}`}
    >
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <Image
          src={exercise.gifUrl}
          alt={`${exercise.name} gif`}
          width={200}
          height={200}
          loading="lazy"
          unoptimized
        />
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="line-clamp-1 text-[20px] font-semibold capitalize leading-[24.8px] text-dark-200">
            {exercise.name}
          </h3>
          <div className="flex gap-2">
            <div className="rounded-xl bg-red-500/90 p-2 text-[16px] font-normal capitalize leading-[22.4px] text-white">
              {exercise.target}
            </div>

            {exercise.secondaryMuscles.map((el) => (
              <div
                key={el}
                className="rounded-xl bg-orange-500/90 p-2 text-[16px] font-normal capitalize leading-[22.4px] text-white"
              >
                {el}
              </div>
            ))}
          </div>
          {exercise.instructions.map((el, i) => (
            <p
              key={el}
              className="line-clamp-1 text-[16px] font-normal leading-[22.4px]"
            >
              <span className="">{i + 1}. </span>
              {el}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

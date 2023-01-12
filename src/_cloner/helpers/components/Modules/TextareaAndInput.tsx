import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const TextareaAndInput: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="tw-row-span-2 tw-flex tw-items-center tw-justify-around tw-p-2">
            <label className="tw-inline-block tw-w-[150px] tw-text-left tw-pl-2 tw-font-Vazir tw-text-md">
                {title}:
            </label>
            <textarea
                disabled={disable}
                defaultValue={defaultValue}
                className="tw-bg-transparent tw-inline-block tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-p-2 tw-font-Vazir tw-text-lg tw-outline-none"
            />
        </section>
    );
};

export default TextareaAndInput;

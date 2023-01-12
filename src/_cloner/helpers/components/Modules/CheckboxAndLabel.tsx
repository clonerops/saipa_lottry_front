import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const CheckboxAndLabel: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="tw-flex tw-justify-start tw-items-center tw-w-full tw-p-2">
            <label className="tw-inline-block tw-text-left tw-font-Vazir tw-px-8 tw-text-md tw-text-indigo-500">
                {title}
            </label>
            <input
                type="checkbox"
                disabled={disable}
                defaultValue={defaultValue}
                className="tw-inline-block tw-border tw-border-gray-400 tw-px-8"
            />
        </section>
    );
};
 
export default CheckboxAndLabel;

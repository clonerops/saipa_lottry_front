import { FC } from "react";

interface IProps {
    title: string
    defaultValue?: string
    disable?: boolean
    required?: boolean
    name?: string | undefined 
    valueData?: string | number
    lottery?: boolean 
    onChangeData?: React.ChangeEventHandler<HTMLInputElement> | undefined

}

const InputAndLabel: FC<IProps> = ({ title, defaultValue, disable, required, name, valueData,  onChangeData, lottery}) => {
    return (
        <section className="tw-flex tw-items-center tw-p-1 tw-py-2">
            <label className="tw-inline-block tw-w-[150px] tw-pl-1 tw-text-left tw-font-Vazir tw-text-md">
               {title}: {required && <span className="tw-text-red-600">*</span>}
            </label>
            <input
                type="text"
                value={valueData}
                name={name}
                onChange={onChangeData}
                disabled={disable}
                defaultValue={defaultValue}
                className={`tw-bg-transparent tw-m-0 tw-inline-block tw-w-[14rem] tw-rounded-md tw-border tw-border-gray-400 tw-p-1 tw-font-Vazir tw-text-lg tw-outline-none ${lottery && 'tw-text-center tw-font-VazirBold tw-text-2xl'}`}
            />
        </section>
    );
};

export default InputAndLabel;
